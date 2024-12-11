import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, TextInput, Button, View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

export default function Page() {
  const { signIn, setActive, isLoaded, isReady } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Log the `isLoaded` and `isReady` states to monitor Clerk loading
  console.log('isLoaded:', isLoaded);
  console.log('isReady:', isReady);

  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      console.log("Clerk is not loaded yet");
      return;
    }

    try {
      console.log("Attempting to sign in...");
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      console.log("Sign-in attempt:", signInAttempt);  // Check the response

      if (signInAttempt.status === 'complete') {
        console.log("Sign-in complete, setting active session...");
        await setActive({ session: signInAttempt.createdSessionId });

        // Navigate to the 'hats' tab after sign-in is complete
        console.log("Redirecting to /hats");
        router.replace('/(tabs)/hats');
      } else {
        console.error("Sign-in not complete:", signInAttempt);
      }
    } catch (err) {
      console.error("Error during sign-in:", JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  if (!isLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text>Loading Clerk...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        style={styles.input}
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
      />
      <Button 
        title="Sign in" 
        onPress={onSignInPress} 
        color="#4CAF50" 
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="/(auth)/sign-up/[[...sign-up]]/page" style={styles.link}>
          <Text style={styles.linkText}>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  link: {
    marginTop: 5,
  },
  linkText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});
