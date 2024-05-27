### Avaluació del Codi de l'Exercici "General"

#### Repte 1 - Validació de Formularis (4p)

1. **Totes les validacions realitzades mitjançant JS (0,5p)**

   - **Complert**: Les validacions es fan exclusivament amb JavaScript, evitant l'ús de validacions HTML.
   - **Puntuació**: 0,5/0,5

2. **Ús d'almenys tres esdeveniments diferents (0,5p)**

   - **Complert**: S'han utilitzat els esdeveniments `input`, `change`, i `submit` per a les validacions.
   - **Puntuació**: 0,5/0,5

3. **Validacions correctes - 1a Part (1p)**

   - **Nom i Cognom**: Les validacions de nom i cognom estan implementades, però no comproven si contenen números.
   - **Email**: La validació de l'email utilitza una expressió regular incorrecta, per la qual cosa no funciona correctament.
   - **Edat**: La validació de l'edat funciona correctament per verificar si l'usuari és major d'edat.
   - **Missatge**: La validació del missatge comprova correctament que té entre 10 i 200 caràcters.
   - **Puntuació**: 0,5/1

4. **Validacions - 2a Part (1p)**

   - **Gènere**: La validació del gènere no està implementada.
   - **Edat**: La validació de l'edat funciona correctament.
   - **Missatge**: La validació del missatge funciona correctament.
   - **Puntuació**: 0,5/1

5. **Validacions - 3a Part (1p)**
   - **Producte**: La validació del producte no està implementada.
   - **Quantitat**: La validació de la quantitat funciona correctament.
   - **Puntuació**: 0,5/1

**Comentaris**

- Es recomana afegir validacions per verificar que el nom i el cognom no continguin números.
- La expressió regular per validar l'email és incorrecta i hauria de ser revisada.
- La validació del gènere no està implementada i s'hauria d'afegir.
- La validació del producte no està implementada i s'hauria d'afegir.

#### Repte 2 - Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles (2p)**

   - **Complert**: Els productes es carreguen correctament al formulari com opcions de la llista de selecció.
   - **Puntuació**: 2/2

2. **Afegir productes a la llista (2p)**

   - **No complert**: No s'ha implementat la funcionalitat per afegir productes a una llista quan es selecciona un producte i una quantitat.
   - **Puntuació**: 0/2

3. **Finalització del formulari (1p)**
   - **No complert**: No es mostra un missatge personalitzat a l'usuari indicant que la comanda s'ha realitzat amb èxit.
   - **Puntuació**: 0/1

**Comentaris**

- Es recomana afegir la funcionalitat per afegir productes a una llista quan es selecciona un producte i una quantitat.
- Assegurar-se que el formulari finalitza correctament amb un missatge personalitzat a l'usuari indicant que la comanda s'ha realitzat amb èxit.

### Qualitat del Codi, Estructura, Llegibilitat i Comentaris (1p)

**Qualitat del codi**

- El codi presenta una estructura adequada, però hi ha errors de lògica i validacions que necessiten ser corregits.

**Estructura i llegibilitat**

- El codi està relativament ben estructurat i és fàcil de llegir.

**Comentaris**

- Incloure comentaris per explicar la funcionalitat del codi és essencial per millorar la seva mantenibilitat.
- Revisar i refactoritzar el codi per assegurar-se que és el més eficient i llegible possible.
- Assegurar-se que totes les funcions de validació són cridades correctament i que els esdeveniments estan ben utilitzats.
