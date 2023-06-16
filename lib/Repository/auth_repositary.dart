import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final authRepositorProvider = Provider(
  (ref) => AuthRepositary(
    googleSignIn: GoogleSignIn(),
  ),
);

class AuthRepositary {
  late final GoogleSignIn _googleSignIn;
  AuthRepositary({
    required GoogleSignIn googleSignIn,
  }) : _googleSignIn = googleSignIn;

  void signInWithGoogle() async {
    try {
      final user = await _googleSignIn.signIn();
      if (user != null) {
        print(user.email);
        print(user.photoUrl);
        print(user.displayName);
      }
    } catch (e) {
      print(e); //Avoid print (e) in production code.
    }
  }
}
