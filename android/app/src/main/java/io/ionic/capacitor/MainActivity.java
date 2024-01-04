package io.ionic.capacitor;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    registerPlugin(MyDevicePlugin.class);
    super.onCreate(savedInstanceState);
  }
}
