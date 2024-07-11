module.exports = {
    parser: '@typescript-eslint/parser', // Utiliza el parser de TypeScript
    parserOptions: {
        ecmaVersion: 2020, // Permite el uso de modernas características de ECMAScript
        sourceType: 'module', // Permite el uso de import/export
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Usar las recomendaciones de @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Habilita eslint-plugin-prettier y muestra errores de Prettier como errores de ESLint. ¡Debe ser el último en la extensión del array!
    ],
    rules: {
        // Puedes añadir reglas personalizadas aquí
        // Ejemplo: "@typescript-eslint/no-unused-vars": "error"
    },
};
