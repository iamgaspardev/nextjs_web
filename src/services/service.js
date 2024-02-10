class Service {
    constructor(apiBaseUrl) {
      this.apiBaseUrl = apiBaseUrl || 'https://api.testvalley.kr';
    }
  
    async getCarousel() {
      const endpoint = `${this.apiBaseUrl}/main-banner/all`;
  
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching carousel data:', error.message);
        throw error;
      }
    }

    async getCategories() {
        const endpoint = `${this.apiBaseUrl}/main-shortcut/all`;
    
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching carousel data:', error.message);
          throw error;
        }
      }
      async getDiscounts() {
        const endpoint = `${this.apiBaseUrl}/collections?prearrangedDiscount`;
    
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching carousel data:', error.message);
          throw error;
        }
      }
  }
  
  export default Service;
  