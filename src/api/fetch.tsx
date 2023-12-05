import { useState } from "react";
import { useEffect } from "react";

export default function useJsonFetch(options: {
        url: string,
        opts: string
    }){
        const {url, opts} = options;
        const [data, setData] = useState(null);
        const [isLoading, setLoading] = useState(false);
        const [error, setError] = useState('');

        useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await fetch(url);
                    if (!response.ok) { 
                        setError(response.statusText);
                        throw new Error(response.statusText);
                    }
                    const data = await response.json();
                    setData(data);
                    setError('');
                } 
                catch (e: any) {setError(e.message);} 
                finally {setLoading(false);}
            }
            fetchData();

            return () => {}
         }, [url]);

        return [{data, isLoading, error}];
    };
