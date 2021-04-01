import axios from "axios";
import { processEnv } from "next/dist/lib/load-env-config";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default clienteAxios;
