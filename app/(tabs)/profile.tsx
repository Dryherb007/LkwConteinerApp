
import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  Platform,
  ActivityIndicator
} from "react-native";
import { Stack } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { colors, commonStyles, buttonStyles } from "@/styles/commonStyles";
import { containerService, Container } from "@/services/containerService";

export default function AdminScreen() {
  const theme = useTheme();
  const [containers, setContainers] = useState<Container[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state for adding new containers
  const [newContainer, setNewContainer] = useState({
    ContainerID: "",
    Location: "",
    Position: ""
  });

  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Load containers on component mount
  useEffect(() => {
    loadContainers();
  }, []);

  const loadContainers = async () => {
    try {
      setLoading(true);
      const allContainers = await containerService.getAllContainers();
      setContainers(allContainers);
    } catch (error) {
      console.log("Error loading containers:", error);
      Alert.alert("Error", "Failed to load containers");
    } finally {
      setLoading(false);
    }
  };

  const handleAddContainer = async () => {
    setIsAdding(true);
    
    try {
      const result = await containerService.addContainer(newContainer);
      
      if (result.success) {
        setNewContainer({ ContainerID: "", Location: "", Position: "" });
        await loadContainers(); // Refresh the list
        Alert.alert("Success", result.message);
      } else {
        Alert.alert("Error", result.message);
      }
    } catch (error) {
      console.log("Error adding container:", error);
      Alert.alert("Error", "Failed to add container. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteContainer = (containerID: string) => {
    Alert.alert(
      "Delete Container",
      `Are you sure you want to delete container "${containerID}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => performDelete(containerID)
        }
      ]
    );
  };

  const performDelete = async (containerID: string) => {
    setDeletingId(containerID);
    
    try {
      const result = await containerService.deleteContainer(containerID);
      
      if (result.success) {
        await loadContainers(); // Refresh the list
        Alert.alert("Success", result.message);
      } else {
        Alert.alert("Error", result.message);
      }
    } catch (error) {
      console.log("Error deleting container:", error);
      Alert.alert("Error", "Failed to delete container. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const clearForm = () => {
    setNewContainer({ ContainerID: "", Location: "", Position: "" });
  };

  const handleResetData = () => {
    Alert.alert(
      "Reset Data",
      "This will reset all containers to the original sample data. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: async () => {
            try {
              await containerService.resetData();
              await loadContainers();
              Alert.alert("Success", "Data has been reset to original sample data");
            } catch (error) {
              console.log("Error resetting data:", error);
              Alert.alert("Error", "Failed to reset data");
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={[commonStyles.container, commonStyles.centerContent, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[commonStyles.text, { marginTop: 16 }]}>Loading containers...</Text>
      </View>
    );
  }

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Admin Panel",
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.text,
          }}
        />
      )}
      <View style={[commonStyles.container, { backgroundColor: colors.background }]}>
        <ScrollView 
          style={commonStyles.content}
          contentContainerStyle={{ paddingBottom: Platform.OS !== 'ios' ? 100 : 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={commonStyles.section}>
            <Text style={commonStyles.title}>Admin Panel</Text>
            <Text style={commonStyles.textSecondary}>
              Manage containers in the database
            </Text>
          </View>

          {/* Add Container Form */}
          <View style={commonStyles.section}>
            <Text style={commonStyles.subtitle}>Add New Container</Text>
            
            <TextInput
              style={commonStyles.input}
              placeholder="Container ID (e.g., CONT006)"
              placeholderTextColor={colors.textSecondary}
              value={newContainer.ContainerID}
              onChangeText={(text) => setNewContainer(prev => ({ ...prev, ContainerID: text }))}
              autoCapitalize="characters"
              editable={!isAdding}
            />
            
            <TextInput
              style={commonStyles.input}
              placeholder="Location (e.g., Warehouse D)"
              placeholderTextColor={colors.textSecondary}
              value={newContainer.Location}
              onChangeText={(text) => setNewContainer(prev => ({ ...prev, Location: text }))}
              editable={!isAdding}
            />
            
            <TextInput
              style={commonStyles.input}
              placeholder="Position (e.g., D4-E5)"
              placeholderTextColor={colors.textSecondary}
              value={newContainer.Position}
              onChangeText={(text) => setNewContainer(prev => ({ ...prev, Position: text }))}
              editable={!isAdding}
            />

            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                style={[buttonStyles.primary, { flex: 1 }]}
                onPress={handleAddContainer}
                disabled={isAdding}
              >
                {isAdding ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <ActivityIndicator size="small" color={colors.card} />
                    <Text style={commonStyles.buttonText}>Adding...</Text>
                  </View>
                ) : (
                  <Text style={commonStyles.buttonText}>Add Container</Text>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[buttonStyles.outline, { paddingHorizontal: 16 }]}
                onPress={clearForm}
                disabled={isAdding}
              >
                <IconSymbol name="arrow.clockwise" color={colors.primary} size={18} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Container List */}
          <View style={commonStyles.section}>
            <View style={[commonStyles.row, { marginBottom: 16 }]}>
              <Text style={commonStyles.subtitle}>All Containers</Text>
              <View style={[commonStyles.highlight, { borderRadius: 12 }]}>
                <Text style={[commonStyles.textSecondary, { fontSize: 12, fontWeight: '600' }]}>
                  {containers.length} total
                </Text>
              </View>
            </View>

            {containers.map((container, index) => (
              <View key={container.ContainerID} style={commonStyles.card}>
                <View style={[commonStyles.row, { marginBottom: 12 }]}>
                  <Text style={[commonStyles.text, { fontWeight: '600', fontSize: 18 }]}>
                    {container.ContainerID}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleDeleteContainer(container.ContainerID)}
                    style={{ 
                      backgroundColor: colors.error, 
                      paddingHorizontal: 12, 
                      paddingVertical: 6, 
                      borderRadius: 6,
                      opacity: deletingId === container.ContainerID ? 0.5 : 1
                    }}
                    disabled={deletingId === container.ContainerID}
                  >
                    {deletingId === container.ContainerID ? (
                      <ActivityIndicator size="small" color={colors.card} />
                    ) : (
                      <Text style={[commonStyles.buttonText, { fontSize: 12 }]}>Delete</Text>
                    )}
                  </TouchableOpacity>
                </View>
                
                <View style={{ gap: 6 }}>
                  <View style={commonStyles.row}>
                    <Text style={commonStyles.textSecondary}>Location:</Text>
                    <Text style={commonStyles.text}>{container.Location}</Text>
                  </View>
                  
                  <View style={commonStyles.row}>
                    <Text style={commonStyles.textSecondary}>Position:</Text>
                    <Text style={commonStyles.text}>{container.Position}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Admin Actions */}
          <View style={commonStyles.section}>
            <Text style={commonStyles.subtitle}>Admin Actions</Text>
            
            <TouchableOpacity 
              style={commonStyles.card}
              onPress={handleResetData}
            >
              <View style={[commonStyles.row, { marginBottom: 8 }]}>
                <IconSymbol name="arrow.clockwise.circle" color={colors.accent} size={24} />
                <Text style={[commonStyles.text, { fontWeight: '600', marginLeft: 12 }]}>
                  Reset Sample Data
                </Text>
                <IconSymbol name="chevron.right" color={colors.textSecondary} size={16} />
              </View>
              <Text style={commonStyles.textSecondary}>
                Reset all containers to the original sample data
              </Text>
            </TouchableOpacity>
          </View>

          {/* Database Info */}
          <View style={commonStyles.section}>
            <View style={[commonStyles.card, { backgroundColor: colors.card, borderColor: colors.accent, borderWidth: 1 }]}>
              <View style={[commonStyles.row, { marginBottom: 8 }]}>
                <IconSymbol name="server.rack" color={colors.accent} size={20} />
                <Text style={[commonStyles.text, { fontWeight: '600', marginLeft: 8 }]}>
                  Database Information
                </Text>
              </View>
              <Text style={commonStyles.textSecondary}>
                Currently using local storage. For persistent data storage across devices, enable Supabase by pressing the Supabase button and connecting to a project.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
