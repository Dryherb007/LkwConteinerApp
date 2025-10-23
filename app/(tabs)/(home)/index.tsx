
import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
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
import { IconSymbol } from "@/components/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { colors, commonStyles, buttonStyles } from "@/styles/commonStyles";
import { containerService, Container } from "@/services/containerService";

export default function HomeScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<Container | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [statistics, setStatistics] = useState<{
    totalContainers: number;
    locationCounts: { [location: string]: number };
  } | null>(null);

  // Load statistics on component mount
  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    try {
      const stats = await containerService.getStatistics();
      setStatistics(stats);
    } catch (error) {
      console.log("Error loading statistics:", error);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      Alert.alert("Error", "Please enter a Container ID to search");
      return;
    }

    setIsSearching(true);
    
    try {
      const result = await containerService.searchContainer(searchQuery);
      setSearchResult(result);
      
      if (!result) {
        Alert.alert("Not Found", `Container "${searchQuery}" was not found in the database.`);
      }
    } catch (error) {
      console.log("Search error:", error);
      Alert.alert("Error", "Failed to search for container. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResult(null);
  };

  const handleRandomContainer = async () => {
    try {
      const allContainers = await containerService.getAllContainers();
      if (allContainers.length > 0) {
        const randomContainer = allContainers[Math.floor(Math.random() * allContainers.length)];
        setSearchQuery(randomContainer.ContainerID);
        setSearchResult(randomContainer);
      }
    } catch (error) {
      console.log("Error getting random container:", error);
    }
  };

  const renderHeaderRight = () => (
    <TouchableOpacity
      onPress={() => Alert.alert("Admin Panel", "Switch to the Admin tab to manage containers")}
      style={{ padding: 8 }}
    >
      <IconSymbol name="gear" color={colors.primary} size={24} />
    </TouchableOpacity>
  );

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Container Search",
            headerRight: renderHeaderRight,
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
            <Text style={commonStyles.title}>Container Lookup</Text>
            <Text style={commonStyles.textSecondary}>
              Enter a Container ID to find its location and position
            </Text>
          </View>

          {/* Statistics */}
          {statistics && (
            <View style={commonStyles.section}>
              <View style={[commonStyles.card, { backgroundColor: colors.primary + '10' }]}>
                <View style={[commonStyles.row, { marginBottom: 8 }]}>
                  <IconSymbol name="chart.bar" color={colors.primary} size={20} />
                  <Text style={[commonStyles.text, { fontWeight: '600', marginLeft: 8 }]}>
                    Database Overview
                  </Text>
                </View>
                <Text style={commonStyles.textSecondary}>
                  Total Containers: {statistics.totalContainers}
                </Text>
                <Text style={commonStyles.textSecondary}>
                  Locations: {Object.keys(statistics.locationCounts).length}
                </Text>
              </View>
            </View>
          )}

          {/* Search Section */}
          <View style={commonStyles.section}>
            <View style={commonStyles.searchContainer}>
              <IconSymbol 
                name="magnifyingglass" 
                color={colors.textSecondary} 
                size={20} 
                style={{ marginRight: 12 }}
              />
              <TextInput
                style={commonStyles.searchInput}
                placeholder="Enter Container ID (e.g., CONT001)"
                placeholderTextColor={colors.textSecondary}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="characters"
                returnKeyType="search"
                onSubmitEditing={handleSearch}
                editable={!isSearching}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={clearSearch} style={{ marginLeft: 8 }}>
                  <IconSymbol name="xmark.circle.fill" color={colors.textSecondary} size={20} />
                </TouchableOpacity>
              )}
            </View>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                style={[buttonStyles.primary, { flex: 1 }]}
                onPress={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <ActivityIndicator size="small" color={colors.card} />
                    <Text style={commonStyles.buttonText}>Searching...</Text>
                  </View>
                ) : (
                  <Text style={commonStyles.buttonText}>Search</Text>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[buttonStyles.outline, { paddingHorizontal: 16 }]}
                onPress={clearSearch}
                disabled={isSearching}
              >
                <IconSymbol name="arrow.clockwise" color={colors.primary} size={18} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Result */}
          {searchResult && (
            <View style={commonStyles.section}>
              <Text style={commonStyles.subtitle}>Search Result</Text>
              <View style={[commonStyles.card, { backgroundColor: colors.highlight }]}>
                <View style={[commonStyles.row, { marginBottom: 12 }]}>
                  <Text style={[commonStyles.text, { fontWeight: '600' }]}>Container Found</Text>
                  <IconSymbol name="checkmark.circle.fill" color={colors.secondary} size={24} />
                </View>
                
                <View style={{ gap: 8 }}>
                  <View style={commonStyles.row}>
                    <Text style={commonStyles.textSecondary}>Container ID:</Text>
                    <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                      {searchResult.ContainerID}
                    </Text>
                  </View>
                  
                  <View style={commonStyles.row}>
                    <Text style={commonStyles.textSecondary}>Location:</Text>
                    <Text style={commonStyles.text}>{searchResult.Location}</Text>
                  </View>
                  
                  <View style={commonStyles.row}>
                    <Text style={commonStyles.textSecondary}>Position:</Text>
                    <Text style={commonStyles.text}>{searchResult.Position}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

