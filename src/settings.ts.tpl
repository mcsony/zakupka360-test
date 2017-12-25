export class AppSettings {
  public static BASE_DOMAIN = 'karo.byllmcsony.ru';
  public static BASE_DOMAIN_PORT = 80;
  public static API_PATH = '/api';
  public static API_PROTOCOL = 'http';
  public static API_END_POINT = AppSettings.API_PROTOCOL + '://' + AppSettings.BASE_DOMAIN + ':'
    + AppSettings.BASE_DOMAIN_PORT + AppSettings.API_PATH;
  public static configData = {
    'ENV': 'DEV',
    'APP_NAME': 'Geoservice',
    'APP_VERSION': '0.1',
    'CONFIG': {
      'PROD': {
        'BASE_HOST': AppSettings.API_PROTOCOL + '://' + AppSettings.BASE_DOMAIN,
        'SERVICE_NAME': 'Закупка 360',
        'DEFAULT_ZOOM_LEVEL': 9,
        'HEADER_PREFIX': 'Basic ',
        'DEFAULT_HEADER_KEY': 'Authorization',
        'DEFAULT_HEADER_VALUE': 'ZXRhX2FwcGFkbWluOlpzdzIzNA==',
        'TWITS_URL': AppSettings.API_END_POINT + '/twits.php',
      },
      'DEV': {
        'BASE_HOST': AppSettings.API_PROTOCOL + '://' + AppSettings.BASE_DOMAIN,
        'SERVICE_NAME': 'Закупка 360',
        'DEFAULT_ZOOM_LEVEL': 9,
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
