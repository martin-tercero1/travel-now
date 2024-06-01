export const fetchCountries = async () => {
    try {
    const response = await fetch(
      "https://countryinfoapi.com/api/regions/Americas/countries"
    );
    const data = await response.json();
    return data;
    } catch {
        console.error("There was an error fetching");
    }
    
    
}