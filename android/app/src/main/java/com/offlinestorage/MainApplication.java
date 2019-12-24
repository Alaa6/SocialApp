package com.offlinestorage;

import com.kishanjvaghela.cardview.RNCardViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import org.devio.rn.splashscreen.SplashScreenReactPackage;


//import io.invertase.firebase.RNFirebasePackage;
//import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
//import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;



import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import io.realm.react.RealmReactPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.imagepicker.ImagePickerPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Arrays;
import com.airbnb.android.react.maps.MapsPackage; // new MapsPackage()


import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

public class MainApplication extends NavigationApplication {

  @Override
  protected ReactGateway createReactGateway() {
      ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }
      };
      return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
      // Add additional packages you require here
      // No need to add RnnPackage and MainReactPackage
      return Arrays.<ReactPackage>asList(
           new RNCardViewPackage() ,
           new ReactNativeYouTube() ,
           new MapsPackage() ,
           new GeolocationPackage() ,
           new ImagePickerPackage() ,
           new SplashScreenReactPackage() ,
           new RealmReactPackage() 
      
      );
  }

  public List<ReactPackage> createAdditionalReactPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    return packages;
}

  //@Override
  //public List<ReactPackage> createAdditionalReactPackages() {
  //    return getPackages();
  //}
}