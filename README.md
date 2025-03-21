# Magma Studio - Landing Page

![Magma Studio Logo](/public/lava/lavabg.png)

## 🔥 Descripción del Proyecto

Magma Studio es una empresa mexicana de diseño y desarrollo web ubicada en Guadalajara, Jalisco. Nos especializamos en la creación de landing pages, tiendas en línea, aplicaciones y programas con un diseño moderno, minimalista y de alto rendimiento.

Nuestro diseño se inspira en la lava, combinando colores intensos con un diseño limpio y funcional que garantiza la mejor experiencia en dispositivos de escritorio, tabletas y móviles.

## 📱 Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Next.js 14** - Framework de React para aplicaciones web
- **TypeScript** - Para tipado estático y mayor robustez
- **Tailwind CSS** - Framework de CSS utilitario para diseño rápido y responsivo
- **Framer Motion** - Para animaciones fluidas y atractivas
- **Sanity.io** - CMS headless para gestión de contenido
- **Prisma** - ORM para manejo de bases de datos
- **Shadcn/ui** - Componentes de UI reutilizables y accesibles

## 🎨 Características Principales

- **Diseño Minimalista** - Interfaces limpias sin elementos innecesarios
- **Alto Contraste** - Fondos oscuros con colores cálidos para resaltar información clave
- **Tipografía Moderna** - Uso de fuentes sans-serif como Inter, Poppins y Montserrat
- **Animaciones Sutiles** - Micro-interacciones para mejorar la experiencia de usuario
- **Totalmente Responsivo** - Funciona perfectamente en dispositivos desde 320px hasta 1440px+
- **Optimizado para SEO** - Estructura semántica y metadatos para mejor posicionamiento
- **Rendimiento Optimizado** - Carga rápida y eficiente de recursos

## 📋 Secciones de la Página

- **Hero** - Presentación principal con animaciones impactantes
- **Servicios** - Descripciones detalladas de nuestras ofertas
- **Proyectos** - Portafolio de trabajos anteriores con casos de estudio
- **Testimonios** - Opiniones de clientes satisfechos
- **Precios** - Paquetes y tarifas transparentes
- **Proceso de Trabajo** - Explicación de nuestra metodología
- **Contacto** - Formulario y datos para comunicación directa
- **FAQ** - Respuestas a preguntas frecuentes
- **Blog** - Artículos sobre diseño, desarrollo y tendencias (alimentado por Sanity.io)

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Mateoverea/magmastudio-lp.git
   cd magmastudio-lp
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` basado en `.env.example`

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir el navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

## 🛠️ Estructura del Proyecto

```
magmastudio-lp/
├── public/                # Archivos estáticos (imágenes, videos, etc.)
├── src/
│   ├── app/               # Rutas y páginas de Next.js 14
│   ├── components/        # Componentes reutilizables
│   │   ├── common/        # Componentes generales
│   │   ├── projects/      # Componentes específicos de proyectos
│   │   ├── ui/            # Componentes de interfaz básicos
│   │   ├── video/         # Componentes para manejo de videos
│   │   └── wrapper/       # Componentes contenedores
│   ├── constants/         # Datos estáticos y configuraciones
│   ├── hooks/             # Custom hooks para lógica reutilizable
│   ├── lib/               # Utilidades y funciones auxiliares
│   ├── sanity/            # Configuración e integración con Sanity
│   ├── schema/            # Esquemas de datos
│   └── store/             # Estado global de la aplicación
├── prisma/                # Esquemas y configuración de Prisma
├── actions/               # Acciones del servidor
└── assets/                # Recursos como fuentes
```

## 🧪 Pruebas

Para ejecutar las pruebas:

```bash
npm test
```

## 📈 SEO y Rendimiento

- Implementación de OpenGraph para compartir en redes sociales
- Metadatos dinámicos para cada página
- Lazy loading de imágenes y componentes
- Optimización de recursos para mejor Core Web Vitals

## 👥 Contribución

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Contacto

Para más información sobre Magma Studio, visita [nuestro sitio web](https://magmastudio.mx) o escríbenos a contacto@magmastudio.mx.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.