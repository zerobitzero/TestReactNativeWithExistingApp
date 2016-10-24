package com.patient.apprn;

import android.app.Application;

import com.patient.android.CommonSdk;

/**
 * @author zs
 */
public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        CommonSdk.init(this);
    }
}
