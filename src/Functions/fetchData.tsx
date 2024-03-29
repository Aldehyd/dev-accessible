export const fetchData = async (url: string,setData: (data: any)=>void,setIsLoading: (isLoading: boolean)=>void,setError: (error: boolean)=>void) => {
    const options = {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        }
      };

    try {
        const data = await fetch(url,options);
        const result = await data.json();
        setData(result);
        setIsLoading(false);
    } catch(err) {
        setError(true);
    }
    
}