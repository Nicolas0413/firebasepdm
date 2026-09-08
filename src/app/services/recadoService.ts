import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { Recado } from '../models/recado';

@Injectable({ providedIn: 'root' })
export class RecadoService {

  async listar(): Promise<Recado[]> {
    const consulta = query(collection(db, 'recados'), orderBy('criadoEm', 'desc'));
    const snap = await getDocs(consulta);

    return snap.docs.map((item) => {
      const dados = item.data();
      return {
        id: item.id,
        texto: dados['texto'],
        autor: dados['autor'],
        criadoEm: dados['criadoEm']?.toDate?.() ?? new Date(),
      };
    });
  }

  adicionar(texto: string, autor: string) {
    return addDoc(collection(db, 'recados'), {
      texto,
      autor,
      criadoEm: Timestamp.now(),
    });
  }

  remover(id: string) {
    return deleteDoc(doc(db, 'recados', id));
  }

}
