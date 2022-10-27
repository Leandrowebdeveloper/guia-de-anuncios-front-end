package app.montes.belos;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(
      com.getcapacitor.community.facebooklogin.FacebookLogin.class
    );
    registerPlugin(GoogleAuth.class);
  }
}
