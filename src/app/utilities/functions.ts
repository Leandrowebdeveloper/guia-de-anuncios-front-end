import { AttrButton } from './../pages/public/system-access/components/buttons/interface/index';

const attrButton: AttrButton[] = [
  {
    route: '/entrar',
    icon: 'log-in',
    label: 'Entrar',
    aria: 'Acessar o sistema.',
    title: 'Acessar o sistema.',
  },
  {
    route: '/recuperar-senha',
    icon: 'key',
    label: 'Recuperar senha',
    aria: 'Recuperar senha.',
    title: 'Recuperar senha.',
  },
  {
    route: '/cadastrar',
    icon: 'create',
    label: 'cadastrar',
    aria: 'Criar conta.',
    title: 'Criar conta.',
  },
];

export default attrButton;
