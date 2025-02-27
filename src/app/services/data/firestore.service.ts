import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { DocumentData, Firestore, collection, collectionData, doc, docData, query, setDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) { }

  getUsers(): Observable<any[]> {
    const userCollectionReference = collection(this.firestore, 'users');
    return collectionData(userCollectionReference, { idField: 'id' }); // Includes document ID
  }
  getUserByUserId(userId: string): Observable<DocumentData | undefined> {
    console.log("User id to search", userId);
    const docRef = doc(this.firestore, `users/${userId}`)
    return docData(docRef, { idField: 'id' });
  }
  createNewUser(user: User) {

    const userCollectionReference = collection(this.firestore, 'users');
    return setDoc(doc(userCollectionReference, user.uid), {
      name: user.displayName, email: user.email, createdAt: new Date().toString()
    });
  }
}