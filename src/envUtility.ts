/* 
  * I am doing this all to host dev on a subfolder of my Ubuntu server.
  * I consider this to be anti pattern. The app shouldn't care where it's hosted. 
*/

type EnvName = 'development' | 'test' | 'production' 

const envBaseRoute = { 
  test: "/dev",
  development: "",
  production: ""
}

const environmentName: EnvName = process.env.NEXT_PUBLIC_NODE_ENV as EnvName

export const envRoute = envBaseRoute[environmentName]