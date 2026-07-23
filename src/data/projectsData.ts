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
};
