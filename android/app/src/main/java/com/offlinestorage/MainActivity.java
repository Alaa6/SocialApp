package com.offlinestorage;

import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen; // splash
import android.os.Bundle; 






public class MainActivity extends NavigationActivity {


 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  
        super.onCreate(savedInstanceState);
    }


 


   

}
