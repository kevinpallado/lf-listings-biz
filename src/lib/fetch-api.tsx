
export async function fetchAPI(
    path: string,
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
        next: { revalidate: 60 },
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
        };

        // Build request URL
        const requestUrl = `${process.env.API_URL}/api/v1${path}`;

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}
