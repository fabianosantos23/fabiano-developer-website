import { Injectable } from '@angular/core';

export interface IProjects {
  id: string
  title: string
  type: string
  description: string
  banner: string
  mockups: string[]
  texts: string[]
}

export enum ProjectIdsEnum {
  BYD_ENERGIA = 'byd-energia',
  TAKEBACK = 'takeback',
  AUDITORE = 'auditore'
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: IProjects[] = [
    {
      id: ProjectIdsEnum.BYD_ENERGIA,
      title: 'BYD Energia',
      type: 'Sistema',
      description: 'O sistema desenvolvido a pedido da empresa BYD foi especialmente concebido para atender às necessidades das empresas do setor de energia solar, proporcionando um controle aprimorado sobre as operações de vendas.',
      banner: 'assets/images/projects/byd/byd-banner.png',
      mockups: [
        'assets/images/projects/byd/big-mockup.png',
        'assets/images/projects/byd/mockup1.png',
        'assets/images/projects/byd/mockup2.png',
        'assets/images/projects/byd/mockup3.png'
      ],
      texts: [
        'Como parte da equipe da empresa Aditore, desempenhei um papel fundamental na construção do sistema no front-end.',
        'Além de trabalhar no sistema, também contribuí para o desenvolvimento do website criado para a empresa.'
      ],
    },
    {
      id: ProjectIdsEnum.TAKEBACK,
      title: 'Takeback',
      type: 'Aplicativo e sistema',
      description: 'TakeBack é uma startup brasileira, criada em 2022, que possibilita você ganhar cashback de um jeito fácil e simples em suas compras pelas empresas parceiras do takeback.',
      banner: 'assets/images/projects/takeback/takeback-banner.png',
      mockups: [
        'assets/images/projects/takeback/big-mockup.png',
        'assets/images/projects/takeback/mockup1.png',
        'assets/images/projects/takeback/mockup2.png',
        'assets/images/projects/takeback/mockup3.png'
      ],
      texts: [
        'Sistema abrangente de controle de vendas especialmente projetado para empresas de energia solar. ',
        ''
      ],
    },
    {
      id: ProjectIdsEnum.AUDITORE,
      title: 'Auditore',
      type: 'Site',
      description: 'Há mais de 14 anos, a Auditore tem sido uma empresa líder no setor de desenvolvimento de software,sistemas, aplicativos web e mobile, websites e banco de dados.',
      banner: 'assets/images/projects/auditore/auditore-banner.png',
      mockups: [
        'assets/images/projects/auditore/big-mockup.png',
        'assets/images/projects/auditore/mockup1.png',
        'assets/images/projects/auditore/mockup2.png',
        'assets/images/projects/auditore/mockup3.png'
      ],
      texts: [
        'Sistema abrangente de controle de vendas especialmente projetado para empresas de energia solar.',
        ''
      ],
    }
  ]
  constructor() { }

  getProjects(projectId: string): IProjects[] {
    const projects = structuredClone(this.projects);
    const index = projects.findIndex(project => project.id === projectId);
    if (index !== -1) {
      const targetProject = projects.splice(index, 1)[0];
      projects.unshift(targetProject);
    }

    return projects;
  }
}
