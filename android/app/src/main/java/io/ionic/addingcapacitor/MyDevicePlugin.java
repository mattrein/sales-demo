package io.ionic.addingcapacitor;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MyDevice")
public class MyDevicePlugin extends Plugin {

  @PluginMethod()
  public void getBatteryInfo(PluginCall call) {
    boolean includeCharging =  call.getBoolean("includeCharging", false);

    JSObject r = new JSObject();
    Context context = getContext();
    r.put("batteryLevel", getBatteryLevel(context));

    if(includeCharging) {
      r.put("isCharging", isCharging(context));
    }

    call.resolve(r);
  }

  private float getBatteryLevel(Context context) {
    IntentFilter filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
    Intent batteryStatus = context.registerReceiver(null, filter);
    return batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
  }

  private boolean isCharging(Context context) {
    IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
    Intent batteryStatus = context.registerReceiver(null, ifilter);

    if (batteryStatus != null) {
      int status = batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
      return status == BatteryManager.BATTERY_STATUS_CHARGING || status == BatteryManager.BATTERY_STATUS_FULL;
    }
    return false;
  }
}
