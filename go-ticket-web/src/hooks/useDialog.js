import { useState, useCallback } from 'react';

/**
 * Hook customizado para gerenciar a exibição e mensagens de um componente de diálogo (pop-up/modal).
 * Encapsula a lógica de estado e funções para abrir e fechar o diálogo.
 *
 * @returns {object} Um objeto contendo:
 * - dialogVisible (boolean): Indica se o diálogo deve ser atualmente exibido.
 * - dialogMessage (string): A mensagem de texto a ser exibida dentro do diálogo.
 * - showDialog (function(message: string)): Uma função para tornar o diálogo visível com uma mensagem específica.
 * - closeDialog (function()): Uma função para ocultar o diálogo e limpar sua mensagem.
 */
export function useDialog() {
  // Estado para controlar a visibilidade do diálogo
  const [dialogVisible, setDialogVisible] = useState(false);
  // Estado para armazenar a mensagem a ser exibida no diálogo
  const [dialogMessage, setDialogMessage] = useState('');

  /**
   * Função para exibir o diálogo com uma mensagem fornecida.
   * Usamos `useCallback` para garantir que esta função só seja recriada
   * se suas dependências mudarem (neste caso, nenhuma, então é uma referência estável).
   * Isso otimiza o desempenho e evita renderizações desnecessárias em componentes filhos.
   * @param {string} message - A mensagem de texto a ser exibida no diálogo.
   */
  const showDialog = useCallback((message) => {
    setDialogMessage(message);
    setDialogVisible(true);
  }, []); // Array de dependências vazia, pois não depende de nenhum valor que mude

  /**
   * Função para fechar o diálogo.
   * Também usa `useCallback` para estabilidade.
   */
  const closeDialog = useCallback(() => {
    setDialogVisible(false);
    setDialogMessage(''); // Opcional: Limpa a mensagem ao fechar.
                          // Útil para evitar que a mensagem anterior apareça brevemente
                          // se o diálogo for aberto novamente com um pequeno delay
                          // antes de uma nova mensagem ser definida.
  }, []); // Array de dependências vazia

  // Retorna os estados e as funções para que o componente que usar o hook possa acessá-los.
  return {
    dialogVisible,
    dialogMessage,
    showDialog,
    closeDialog,
  };
}