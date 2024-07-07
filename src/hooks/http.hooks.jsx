import { useCallback, useState } from "react";

export const useHttp = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
  const [data, setData] = useState({})

  const request = async (url, method = "GET", body = null, headers = {"Content-Type": "application/json"}) => {
    // setLoading(true);
console.log(url);
    try {
      let res = await fetch(url, { method, body, headers });
      console.log(res);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      const data = await res.json();
console.log(data);
      setData(data)

      return data;
    } catch (e) {
        console.log("res");
    }
  };
    return {request}
};