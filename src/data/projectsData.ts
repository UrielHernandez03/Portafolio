export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  terminal: {
    command: string;
    output: string;
  };
  stats: {
    icon: string;
    value: string;
    label: string;
  }[];
  architecture: {
    title: string;
    subtitle: string;
    type: string;
    cards: {
      id: string;
      icon: string;
      title: string;
      subtitle: string;
      features: string[];
    }[];
  };
  stack: {
    category: string;
    items: { icon: string; name: string }[];
  }[];
  modules: {
    icon: string;
    title: string;
    description: string;
    features: string[];
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export const projectsData: Record<string, ProjectData> = {
  'landysystem': {
    id: 'landysystem',
    title: 'LandySystem',
    subtitle: 'ERP y Punto de Venta diseñado para operaciones de alto rendimiento',
    description: [
      'LandySystem es una plataforma ERP/Punto de Venta (POS) robusta y modular, diseñada con una arquitectura de microservicios y múltiples interfaces de usuario. El sistema gestiona integralmente recursos humanos, finanzas, inventarios, compras, calidad, activos fijos y operaciones de punto de venta (restaurante).',
      'El proyecto demuestra un dominio avanzado en arquitecturas full-stack modernas, gestión de monorepos, microservicios y desarrollo de interfaces de usuario complejas.'
    ],
    terminal: {
      command: 'landysystem --status',
      output: `<span class="status-icon">⚡</span> Backend    <span class="tech-tag">[Moleculer]</span>    <span class="status-running">● Running</span>
<span class="status-icon">🖥</span>  Dashboard  <span class="tech-tag">[React + MUI]</span>  <span class="status-running">● Running</span>  
<span class="status-icon">🏪</span> POS        <span class="tech-tag">[React + ESC]</span>  <span class="status-running">● Running</span>

Modules: 7 active
Services: 15+ microservices
Databases: PostgreSQL + MongoDB`
    },
    stats: [
      { icon: '📦', value: '7+', label: 'Módulos ERP' },
      { icon: '🖥️', value: '3', label: 'Entornos' },
      { icon: '⚡', value: '15+', label: 'Microservicios' }
    ],
    architecture: {
      title: 'Monorepo & Microservicios',
      subtitle: 'Arquitectura escalable y modular orientada a un alto rendimiento',
      type: 'MONOREPO',
      cards: [
        {
          id: 'backend',
          icon: '⚙️',
          title: 'Backend API',
          subtitle: 'Moleculer Microservicios',
          features: ['PostgreSQL + MongoDB', 'JWT + bcrypt Auth', 'AWS S3 + Textract', 'PDF/Excel Generation', 'Email (Postmark)']
        },
        {
          id: 'ui',
          icon: '🖥️',
          title: 'Dashboard Admin',
          subtitle: 'React 19 + Vite',
          features: ['Material UI v7', 'Chart.js Analytics', 'Zod Validation', 'Webcam + Barcode', 'PWA Support']
        },
        {
          id: 'pos',
          icon: '🏪',
          title: 'Punto de Venta',
          subtitle: 'Desktop App / Local',
          features: ['Local Thermal Printing', 'Cash Drawer Control', 'Offline Capabilities', 'Real-time Sync', 'Touch Optimized']
        }
      ]
    },
    stack: [
      {
        category: 'Frontend & UI',
        items: [
          { icon: '⚛️', name: 'React 19' },
          { icon: '🛠️', name: 'Vite' },
          { icon: '💅', name: 'Material UI' },
          { icon: '🎨', name: 'TailwindCSS' }
        ]
      },
      {
        category: 'Backend & Services',
        items: [
          { icon: '🟢', name: 'Node.js' },
          { icon: '⚡', name: 'Moleculer' },
          { icon: '☁️', name: 'AWS Textract' }
        ]
      },
      {
        category: 'Database & Data',
        items: [
          { icon: '🐘', name: 'PostgreSQL' },
          { icon: '🍃', name: 'MongoDB' },
          { icon: '🗄️', name: 'Redis' }
        ]
      },
      {
        category: 'DevOps & Tools',
        items: [
          { icon: '📦', name: 'npm Workspaces' },
          { icon: '🐳', name: 'Docker' },
          { icon: '🔄', name: 'Git' }
        ]
      }
    ],
    modules: [
      {
        icon: '👥',
        title: 'Recursos Humanos',
        description: 'Gestión completa del ciclo de vida del empleado.',
        features: ['Control de expedientes', 'Gestión de nómina', 'Control de asistencia (Reloj Checador)', 'Evaluaciones de desempeño']
      },
      {
        icon: '💰',
        title: 'Finanzas',
        description: 'Control financiero integral y proyecciones.',
        features: ['Cuentas por pagar/cobrar', 'Flujo de caja', 'Conciliación bancaria', 'Reportes financieros']
      },
      {
        icon: '📦',
        title: 'Inventarios',
        description: 'Gestión en tiempo real de stock multi-sucursal.',
        features: ['Múltiples almacenes', 'Máximos y mínimos', 'Costeo promedio/PEPS', 'Transferencias inter-sucursal']
      },
      {
        icon: '🛒',
        title: 'Compras',
        description: 'Automatización del abastecimiento de la empresa.',
        features: ['Órdenes de compra', 'Gestión de proveedores', 'Cuentas por pagar', 'Recepción de mercancía']
      },
      {
        icon: '✅',
        title: 'Calidad',
        description: 'Aseguramiento y control de calidad corporativo.',
        features: ['Inspecciones programadas', 'No conformidades', 'Acciones correctivas', 'Auditorías internas']
      },
      {
        icon: '🏢',
        title: 'Activos Fijos',
        description: 'Control, depreciación y mantenimiento de activos.',
        features: ['Registro fotográfico', 'Cálculo de depreciación', 'Asignación de resguardos', 'Mantenimiento preventivo']
      }
    ],
    highlights: [
      {
        title: 'Impresión Térmica Nativa',
        description: 'Integración directa con impresoras térmicas locales usando comandos ESC/POS para tickets súper rápidos en el POS, sin dialogos de impresión del navegador.'
      },
      {
        title: 'OCR con IA',
        description: 'Implementación de AWS Textract para la lectura automatizada de facturas y documentos, reduciendo el error humano en la captura de datos.'
      },
      {
        title: 'Multi-Tenant',
        description: 'Arquitectura diseñada para soportar múltiples sucursales con control de acceso basado en roles (RBAC) extremadamente granular.'
      }
    ]
  },

  'landypos': {
    id: 'landypos',
    title: 'LandyPOS',
    subtitle: 'Punto de Venta diseñado para operaciones rápidas',
    description: [
      'LandyPOS es un sistema de Punto de Venta (POS) rápido y optimizado para pantallas táctiles, diseñado para manejar alto volumen de transacciones en restaurantes y comercios minoristas.',
      'Se conecta directamente a hardware local (impresoras térmicas ESC/POS y cajón de dinero) y ofrece sincronización en la nube con capacidades offline.'
    ],
    terminal: {
      command: 'landypos --start',
      output: `<span class="status-icon">🔌</span> Hardware   <span class="tech-tag">[ESC/POS]</span>    <span class="status-running">● Connected</span>
<span class="status-icon">🏪</span> POS UI     <span class="tech-tag">[React + Vite]</span> <span class="status-running">● Active</span>  
<span class="status-icon">☁️</span> Cloud Sync <span class="tech-tag">[Offline]</span>    <span class="status-running">● Synced</span>

Printers: 2 active
Local DB: IndexedDB`
    },
    stats: [
      { icon: '⚡', value: '100%', label: 'Offline Ready' },
      { icon: '🖨️', value: 'ESC', label: 'Impresión Local' },
      { icon: '👆', value: 'Touch', label: 'Optimizada' }
    ],
    architecture: {
      title: 'Local & Cloud',
      subtitle: 'Sincronización en tiempo real y soporte offline',
      type: 'PWA / POS',
      cards: [
        {
          id: 'ui',
          icon: '📱',
          title: 'Interfaz POS',
          subtitle: 'React + Vite',
          features: ['Diseño Touch', 'Gestión Rápida', 'Soporte PWA', 'Manejo de Tickets']
        },
        {
          id: 'hardware',
          icon: '🖨️',
          title: 'Hardware Local',
          subtitle: 'Integración Web Serial',
          features: ['Impresoras Térmicas', 'Comandos ESC/POS', 'Cajón de Dinero', 'Escáner de Código']
        },
        {
          id: 'sync',
          icon: '🔄',
          title: 'Sincronización',
          subtitle: 'Offline-First',
          features: ['IndexedDB Local', 'Sincronización Background', 'Colas de Transacciones', 'Resolución de Conflictos']
        }
      ]
    },
    stack: [
      {
        category: 'Frontend & UI',
        items: [
          { icon: '⚛️', name: 'React' },
          { icon: '🛠️', name: 'Vite' },
          { icon: '📱', name: 'PWA' },
          { icon: '🎨', name: 'TailwindCSS' }
        ]
      },
      {
        category: 'Hardware & Sync',
        items: [
          { icon: '🖨️', name: 'ESC/POS' },
          { icon: '🌐', name: 'Web Serial API' },
          { icon: '💾', name: 'IndexedDB' }
        ]
      }
    ],
    modules: [
      {
        icon: '📝',
        title: 'Comandas',
        description: 'Gestión rápida de pedidos y mesas.',
        features: ['Mapa de mesas visual', 'División de cuentas', 'Modificadores de platillos', 'Envío a cocina']
      },
      {
        icon: '💵',
        title: 'Caja',
        description: 'Control de flujo de efectivo y cobros.',
        features: ['Apertura y cierre', 'Múltiples métodos de pago', 'Control de cajón', 'Tickets rápidos']
      },
      {
        icon: '🖨️',
        title: 'Impresión',
        description: 'Motor de impresión local integrado.',
        features: ['Tickets de venta', 'Comandas a cocina', 'Cortes de caja X/Z', 'Configuración multi-impresora']
      }
    ],
    highlights: [
      {
        title: 'Múltiples sucursales',
        description: 'Capacidad de gestionar múltiples sucursales con inventarios independientes y transferencias entre ellas.'
      },
      {
        title: 'Impresi�n ESC/POS Nativa',
        description: 'Elimina el cuadro de di�logo de impresi�n del navegador web enviando comandos binarios crudos directamente a la impresora t�rmica mediante Web Serial API.'
      }
    ]
  },

  'historias-en-papel': {
    id: 'historias-en-papel',
    title: 'Historias en Papel',
    subtitle: 'Módulo Avanzado de Carga Masiva',
    description: [
      'El objetivo de este proyecto fue expandir y optimizar la plataforma de gestión de eventos (SISTWEB) exclusiva para Historias en Papel.',
      'Se requirió la implementación de una característica crítica: permitir el registro simultáneo de múltiples acompañantes por invitado principal mediante un módulo de carga masiva en formato Excel. El principal desafío consistía en integrar esta nueva arquitectura de datos sin causar regresiones en la lógica de negocio existente, manteniendo intactas las interfaces visuales y validaciones corporativas.'
    ],
    terminal: {
      command: 'php import_engine.php --validate',
      output: `<span class="status-icon">📂</span> File       <span class="tech-tag">[.xlsx]</span>       <span class="status-running">● Validated</span>
<span class="status-icon">🔄</span> Parser     <span class="tech-tag">[Spreadsheet]</span> <span class="status-running">● Active</span>  
<span class="status-icon">🛡️</span> Validation <span class="tech-tag">[Data Check]</span>  <span class="status-running">● Passed</span>

Rows Parsed: 1,500+
Companions Added: 3,420
Legacy Compatibility: 100% Secure`
    },
    stats: [
      { icon: '⏱️', value: '95%', label: 'Ahorro de Tiempo' },
      { icon: '🛡️', value: '100%', label: 'Retrocompatibilidad' },
      { icon: '📊', value: 'Masiva', label: 'Carga de Datos' }
    ],
    architecture: {
      title: 'Flujo de Carga Masiva',
      subtitle: 'Arquitectura de importación segura y no destructiva',
      type: 'IMPORT ENGINE',
      cards: [
        {
          id: 'frontend',
          icon: '🖥️',
          title: 'Interfaz & UI',
          subtitle: 'Dashboard / DataTables',
          features: ['Renderizado en tiempo real', 'Inyección dinámica de datos', 'Exportación a PDF/Excel web', 'Validación de formatos frontend']
        },
        {
          id: 'backend',
          icon: '⚙️',
          title: 'Motor PHP',
          subtitle: 'Procesamiento de Datos',
          features: ['Algoritmo de extracción segura', 'Normalización de strings', 'Estrategia de Fallbacks', 'Protección de envíos masivos']
        },
        {
          id: 'excel',
          icon: '📊',
          title: 'PhpSpreadsheet',
          subtitle: 'Manipulación Avanzada',
          features: ['Edición No Destructiva', 'Conservación de Data Validation', 'Mantenimiento de colores y estilos', 'Inserción de columnas dinámica']
        }
      ]
    },
    stack: [
      {
        category: 'Backend Engine',
        items: [
          { icon: '🐘', name: 'PHP' },
          { icon: '🗄️', name: 'MySQL' },
          { icon: '📊', name: 'PhpSpreadsheet' }
        ]
      },
      {
        category: 'Frontend & UI',
        items: [
          { icon: '🟨', name: 'JavaScript Vanilla' },
          { icon: '🟦', name: 'jQuery' },
          { icon: '📑', name: 'DataTables' },
          { icon: '🌐', name: 'HTML5/CSS3' }
        ]
      },
      {
        category: 'DevOps & Tools',
        items: [
          { icon: '🔄', name: 'Git' },
          { icon: '🛠️', name: 'Troubleshooting' }
        ]
      }
    ],
    modules: [
      {
        icon: '📥',
        title: 'Extracción Segura',
        description: 'Algoritmo actualizado para procesar .xlsx y asociar relacionalmente la nueva columna.',
        features: ['Lectura de archivos complejos', 'Asociación relacional de acompañantes', 'Normalización robusta de strings', 'Estrategia de fallbacks']
      },
      {
        icon: '🎨',
        title: 'Plantillas No Destructivas',
        description: 'Edición de Excel mediante código sin romper la estructura original.',
        features: ['Conservación de Data Validation', 'Mantenimiento corporativo', 'Preservación de ejemplos pre-cargados', 'Desplazamiento dinámico']
      },
      {
        icon: '🖥️',
        title: 'Renderizado Dinámico',
        description: 'Inyección de datos en tiempo real en la interfaz de administración.',
        features: ['Actualización orgánica de tabla', 'Inyección dinámica en DataTables', 'Precisión estricta de diseño UI', 'Exportación nativa funcional']
      },
      {
        icon: '🛡️',
        title: 'Integración Legacy',
        description: 'Adaptación sin fricciones al código existente del sistema.',
        features: ['Protección de envíos masivos', 'Generación de QR inalterada', 'Alertas dinámicas intactas', 'Rollbacks seguros con Git']
      }
    ],
    highlights: [
      {
        title: 'Automatización y Aceleración',
        description: 'Se eliminó la fricción operativa que obligaba a los administradores a registrar acompañantes de forma individual. El flujo de trabajo mediante carga masiva ahorró horas de captura manual.'
      },
      {
        title: 'Escalabilidad Segura',
        description: 'La nueva arquitectura de importación se acopló como una capa adicional altamente estable, protegiendo las validaciones del sistema original y robusteciendo la plataforma tecnológica de Historias en Papel.'
      },
      {
        title: 'Resolución Inteligente',
        description: 'El uso de normalización para strings y fallbacks previene la corrupción de datos ante errores humanos típicos de captura en Excel, garantizando la integridad de la base de datos.'
      }
    ]
  }

  , 'seat-calidad-bd': {
    id: 'seat-calidad-bd',
    title: 'Calidad de Base de Datos',
    subtitle: 'Portal interno para Cantabria Motors (SEAT & Volkswagen)',
    description: [
      'Implementación de una arquitectura de base de datos relacional y portales de gestión para optimizar el control de clientes, historiales de mantenimiento automotriz y planes de capacitación del personal.',
      'El sistema abarca múltiples portales internos asegurando la calidad de los datos, el seguimiento a través del ciclo PDCA y la seguridad con autenticación robusta.'
    ],
    terminal: {
      command: 'mysql -u root -p seat_db',
      output: `<span class="status-icon">🗄️</span> Database   <span class="tech-tag">[MySQL 8.0]</span>  <span class="status-running">● Connected</span>
<span class="status-icon">🛡️</span> Security   <span class="tech-tag">[Auth]</span>       <span class="status-running">● Strict</span>  
<span class="status-icon">🔄</span> Sync       <span class="tech-tag">[CRM/ERP]</span>    <span class="status-running">● Active</span>

Tables: 25+ structured
Audits: Continuous`
    },
    stats: [
      { icon: '👥', value: '100%', label: 'Control Personal' },
      { icon: '🚗', value: '2', label: 'Marcas' },
      { icon: '📊', value: '4', label: 'Portales Integrados' }
    ],
    architecture: {
      title: 'Arquitectura Relacional',
      subtitle: 'Diseño robusto enfocado en la integridad y consistencia',
      type: 'ENTERPRISE DB',
      cards: [
        {
          id: 'database',
          icon: '🗄️',
          title: 'Base de Datos',
          subtitle: 'MySQL 8.0',
          features: ['Modelo Entidad-Relación', 'Diccionario de Datos', 'Restricciones de Integridad', 'Auditoría Continua']
        },
        {
          id: 'backend',
          icon: '☕',
          title: 'Backend',
          subtitle: 'Java 17',
          features: ['APIs Seguras', 'Control de Accesos', 'Reportes Automatizados', 'Integración CRM/ERP']
        },
        {
          id: 'ui',
          icon: '🖥️',
          title: 'Portales Web',
          subtitle: 'Interfaces Internas',
          features: ['Portal de Clientes', 'Group Retail Portal', 'Gestor de Capacitaciones', 'Autenticación SecurID']
        }
      ]
    },
    stack: [
      {
        category: 'Database',
        items: [
          { icon: '🐬', name: 'MySQL' },
          { icon: '📝', name: 'SQL' },
          { icon: '📊', name: 'Diccionario Datos' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { icon: '☕', name: 'Java 17' },
          { icon: '🛡️', name: 'Seguridad' }
        ]
      },
      {
        category: 'Metodologías',
        items: [
          { icon: '🔄', name: 'Scrum' },
          { icon: '📈', name: 'Ciclo PDCA' },
          { icon: '📋', name: 'Requerimientos' }
        ]
      },
      {
        category: 'Infraestructura',
        items: [
          { icon: '🐧', name: 'Linux Server' },
          { icon: '💾', name: 'Backups' }
        ]
      }
    ],
    modules: [
      {
        icon: '👥',
        title: 'Portal de Clientes',
        description: 'Gestión detallada de clientes y su historial de interacciones.',
        features: ['Historial de compras', 'Gestión de encuestas', 'Feedback de servicio', 'Actualización en tiempo real']
      },
      {
        icon: '🚗',
        title: 'Group Retail Portal',
        description: 'Administración del mantenimiento e intervenciones vehiculares.',
        features: ['Registro por bastidor', 'Historial de servicios', 'Programación de citas', 'Filtros avanzados']
      },
      {
        icon: '✅',
        title: 'Q-Check',
        description: 'Módulo de auditoría y validación de calidad en reparaciones.',
        features: ['Seguimiento de órdenes', 'Resultados de intervención', 'Técnicos responsables', 'Observaciones detalladas']
      },
      {
        icon: '🎓',
        title: 'Gestión de Capacitación',
        description: 'Control de cursos, certificaciones y progreso del personal.',
        features: ['Asignación de cursos', 'Progreso individual', 'Cursos obligatorios', 'Exportación de reportes']
      }
    ],
    highlights: [
      {
        title: 'Diccionario de Datos Estructurado',
        description: 'Creación de un Diccionario de Datos exhaustivo para estandarizar la información en toda la empresa, mejorando la coherencia y evitando redundancias.'
      },
      {
        title: 'Mejora Continua (PDCA)',
        description: 'Implementación del ciclo PDCA (Plan-Do-Check-Act) para asegurar la optimización constante de los servicios de mantenimiento automotriz.'
      },
      {
        title: 'Seguridad y Privacidad',
        description: 'Sistema reforzado con métodos de autenticación avanzados (certificados y SecurID) para proteger la confidencialidad de la información.'
      }
    ]
  },

  'inventorypro': {
    id: 'inventorypro',
    title: 'InventoryPro ERP',
    subtitle: 'Sistema Integral de Gestión Empresarial',
    description: [
      'InventoryPro ERP es un sistema de gestión empresarial de nivel corporativo (Enterprise Resource Planning) diseñado para controlar de manera eficiente y segura las operaciones diarias de una empresa, integrando la gestión de inventarios, finanzas, ventas (Punto de Venta) y control de usuarios.',
      'El proyecto destaca por su arquitectura segura con control de acceso basado en roles (RBAC), sistema cerrado (Invite-Only), y un estricto Kárdex de inventario, todo ello bajo un rendimiento excepcional con paginación server-side.'
    ],
    terminal: {
      command: 'npm run dev',
      output: `<span class="status-icon">⚙️</span> Backend    <span class="tech-tag">[Express+Prisma]</span>    <span class="status-running">● Running</span>
<span class="status-icon">🖥</span> Frontend   <span class="tech-tag">[React+Vite]</span>      <span class="status-running">● Active</span>  
<span class="status-icon">🗄️</span> Database   <span class="tech-tag">[PostgreSQL]</span>      <span class="status-running">● Connected</span>

Security: RBAC Enforced
Integrity: Active`
    },
    stats: [
      { icon: '🛡️', value: 'RBAC', label: 'Seguridad' },
      { icon: '⚡', value: 'ms', label: 'Respuesta' },
      { icon: '📦', value: '10k+', label: 'Productos' }
    ],
    architecture: {
      title: 'MERN/PERN Stack',
      subtitle: 'Arquitectura cliente-servidor de alta concurrencia',
      type: 'ENTERPRISE ERP',
      cards: [
        {
          id: 'backend',
          icon: '⚙️',
          title: 'Backend API RESTful',
          subtitle: 'Node.js & Express',
          features: ['TypeScript', 'Prisma ORM', 'JWT & bcrypt', 'Transacciones ACID']
        },
        {
          id: 'frontend',
          icon: '🖥️',
          title: 'Frontend SPA',
          subtitle: 'React & Tailwind',
          features: ['React Router v6', 'Axios (JWT Interceptors)', 'Recharts', 'jsPDF & XLSX']
        },
        {
          id: 'database',
          icon: '🗄️',
          title: 'Base de Datos',
          subtitle: 'PostgreSQL',
          features: ['Integridad Referencial', 'Borrado Lógico', 'Paginación Nativa', 'Historial']
        }
      ]
    },
    stack: [
      {
        category: 'Frontend & UI',
        items: [
          { icon: '⚛️', name: 'React' },
          { icon: '🔷', name: 'TypeScript' },
          { icon: '🎨', name: 'Tailwind CSS' },
          { icon: '📊', name: 'Recharts' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { icon: '🟢', name: 'Node.js' },
          { icon: '🚂', name: 'Express.js' },
          { icon: '🛡️', name: 'JWT & bcrypt' }
        ]
      },
      {
        category: 'Database & ORM',
        items: [
          { icon: '🐘', name: 'PostgreSQL' },
          { icon: '💎', name: 'Prisma' },
          { icon: '💾', name: 'Soft Deletes' }
        ]
      }
    ],
    modules: [
      {
        icon: '📊',
        title: 'Panel de Control',
        description: 'Visualización general de KPIs y alertas automáticas por desabastecimiento.',
        features: ['Stock crítico', 'Flujo de caja', 'Métricas principales']
      },
      {
        icon: '🏪',
        title: 'Punto de Venta (POS)',
        description: 'Interfaz rápida para venta directa con escáner y generación de tickets.',
        features: ['Deducción automática', 'Tickets 80mm', 'Historial financiero']
      },
      {
        icon: '📦',
        title: 'Kárdex de Inventario',
        description: 'Trazabilidad estricta de Entradas, Salidas y Ajustes de inventario.',
        features: ['Comprobantes PDF', 'Exportación Excel', 'Firmas de usuario']
      },
      {
        icon: '👥',
        title: 'Control de Usuarios',
        description: 'Gestión de la plantilla laboral con seguridad avanzada.',
        features: ['Roles', 'Sistema cerrado', 'Permisos dinámicos']
      }
    ],
    highlights: [
      {
        title: 'Transacciones SQL Atómicas',
        description: 'Uso de prisma.$transaction en ventas para garantizar que la reducción de stock y el registro financiero ocurran atómicamente, con Rollbacks automáticos en caso de falla.'
      },
      {
        title: 'Generación Dinámica de PDFs en Cliente',
        description: 'Renderizado de tickets térmicos y reportes directamente usando la CPU del navegador del cliente (jsPDF), liberando al servidor backend de carga computacional excesiva.'
      },
      {
        title: 'Paginación Server-Side',
        description: 'Búsqueda y paginación ejecutadas de forma nativa en PostgreSQL, entregando la información en bloques para escalar eficientemente el catálogo a cientos de miles de registros.'
      }
    ]
  }
};
