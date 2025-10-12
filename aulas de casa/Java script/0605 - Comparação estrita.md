# Comparação estrita (idêntico)

O JavaScript tenta converter dados, por isso o uso do `==` pode ocasionar problemas.

Ex:

```javascript
"1" == 1
1 == true
null == undefined
```

Para solucionar este problema utilizamos a comparação estrita (idêntico).

```javascript
"1" === 1
1 === true
null === undefined
null !== undefined
```
