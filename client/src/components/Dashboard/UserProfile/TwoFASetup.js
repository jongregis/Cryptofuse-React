import React from "react";

export default function TwoFASetup() {
  return (
    <div>
      <h1>What is two-factor or two-step authentication?</h1>
      <p>
        Two-factor authentication is a mechanism that requires users to provide
        two different means of identification when logging in. When you enable
        two-factor authentication in Cryptofuse, users will be required to log
        in with their Cryptofuse password and a random numeric code generated by
        the Google Authenticator application which is available for iPhone,
        Android. In Cryptofuse two-factor is set up on a per-user basis.
      </p>
      <h1>Why would I need this?</h1>
      <p>
        Although the internet is a trusted medium for hosting critical
        applications and information, passwords are often a weak link in the
        chain of security between a web application and a user. Cryptofuse's
        two-factor authentication option allows subscribers to require that
        passwords be used in conjunction with a randomized code delivered to a
        mobile device. Once this code is entered after the initial login
        credentials, the user will be able to access their Cryptofuse account.
        This means enhanced security for all users, and ensures that a weak or
        compromised password can’t be used alone to gain access to sensitive
        data.
      </p>

      <h1>Installing the Google Authenticator App</h1>
      <p>
        Go to the Google Play (or Apple) store and search for "Google
        Authenticator", then install the app.
      </p>
      <p>
        Once installed, open the Google Authenticator app and tap "Begin setup".{" "}
      </p>
      <h1>Two-Factor Authentication Setup Instructions</h1>
      <p>
        To enable two-factor authentication, go to your Cryptofuse user info
        page and click on the "switch" in the Set Up 2FA box.{" "}
      </p>
      <p>
        Once done, two-factor authentication is now enabled. You can turn if off
        again as well if need be.
      </p>
      <p>
        Open the Google Authenticator app and click the plus sign to add a new
        account.
      </p>
      <p>Click scan a barcode</p>
      <p>
        Now, in your Cryptofuse profile page, click generate code. There will be
        a pop up with a QR code.
      </p>
      <p>
        Point your phone at the QR code and your all set. Your phone will save
        the info
      </p>
      <h1>Logging in to Cryptofuse Using Two-Factor</h1>
      <p>
        With two-factor authentication enabled, you will be prompted to enter
        the "2-step verification" code after signing in with your password. Open
        the Google Authenticator app on your mobile device and type in the
        6-digit numeric code that is displayed.{" "}
      </p>
      <p>
        Youre all set! Peace of mind that your information is two-factor secure.
      </p>
    </div>
  );
}
