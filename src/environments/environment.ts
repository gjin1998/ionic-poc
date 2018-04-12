// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
  
    //serviceBaseUrl: "http://localhost:1234/",
    serviceBaseUrl: "https://ppkpi-api-dev.azurewebsites.net/",
     authorizationToken: '648d3a52-52a2-49a0-bfe6-96851b0cba7d',
    // authorizationToken: '1b3a9a41-ebe8-42a9-8d72-b190a773279f',
    azureAdApiBaseUrl : "http://ppkpi-azureadservice.azurewebsites.net/",
    localDefaultUser: "test@cbre.com",
    disableAutoPropertyEdit: true
  };
  