package com.patient.apprn;

import android.content.Intent;
import android.os.Bundle;

import com.patient.android.activity.BaseActivity;

/**
 * @author zs
 */
public class MainActivity extends BaseActivity {

    @Override
    protected void init(Bundle bundle) {
        setContentView(R.layout.act_main);

        Intent intent = new Intent(this, MyReactActivity.class);
        startActivity(intent);
    }
}
