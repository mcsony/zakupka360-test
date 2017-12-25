export class AppSettings {
  public static configData = {
    'ENV': 'DEV',
    'APP_NAME': 'Закупка',
    'APP_VERSION': '0.1',
    'CONFIG': {
      'PROD': {
        'SERVICE_NAME': 'Закупка 360',
        'HEADER_PREFIX': 'Basic ',
        'DEFAULT_HEADER_KEY': 'Authorization',
        'DEFAULT_HEADER_VALUE': 'ZXRhX2FwcGFkbWluOlpzdzIzNA==',
        'TWITS_URL': 'http://localhost:3000/twitter/search',
        'TWITS_LIMIT': 100
      },
      'DEV': {
        'SERVICE_NAME': 'Закупка 360',
        'HEADER_PREFIX': 'Basic ',
        'DEFAULT_HEADER_KEY': 'Authorization',
        'DEFAULT_HEADER_VALUE': 'ZXRhX2FwcGFkbWluOlpzdzIzNA==',
        'TWITS_URL': 'http://localhost:3000/twitter/search',
        'TWITS_LIMIT': 100
      }
    }
  };

  public static getConfig() {
    return AppSettings.configData.CONFIG[AppSettings.appEnv()];
  }
  public static appEnv() {
    return AppSettings.configData['ENV'];
  }
}
