const ID_TOKEN_KEY = "id_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  if(process.server){
    return null;
  }
  return localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  if(process.client){
    localStorage.setItem(ID_TOKEN_KEY, token);
  }
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  if(process.client){
    localStorage.removeItem(ID_TOKEN_KEY);
  }
};

export default { getToken, saveToken, destroyToken };
