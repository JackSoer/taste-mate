import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { useEffect, useState } from 'react';

type useFetchAxiosDataResponseType = {
  data: any;
  isLoading: boolean;
  fetchError: string | null;
};

const useFetchAxiosData = (url: string): useFetchAxiosDataResponseType => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted: boolean = true;
    const cancelToken: CancelTokenSource = axios.CancelToken.source();

    const fetchData = async (dataUrl: string): Promise<void> => {
      try {
        if (isMounted) {
          setIsLoading(true);

          const data: AxiosResponse<any, any> = await axios.get(dataUrl, {
            cancelToken: cancelToken.token,
          });

          setData(data);
          setFetchError(null);
          setIsLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setFetchError(err.message);
          setIsLoading(false);
        }
      }
    };

    fetchData(url);

    const cleanUp = (): void => {
      isMounted = false;
      cancelToken.cancel();
    };

    return cleanUp;
  }, [url]);

  return { data, isLoading, fetchError };
};

export default useFetchAxiosData;
