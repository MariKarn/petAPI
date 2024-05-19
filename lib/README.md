# Manejo de la API
La Application Programming Interface (API) designada para la base de datos se sirve del unico uso de endpoints para realizar las operaciones de administracion de una base de datos; Crear, Actualizar, Borrar y Leer (CRUD generalmente conocido), el script plasmado en __migration/db.sql__ menciona las propiedades de la tabla y sus tipos asi como tambien en __doc/NORMALIZATION.md__

### Endpoints
Un endpoint es un camino concatenado a la direccion donde esta alojada la API o servicio,
cada endpoint puede adquirir parametros en la misma url o mediante un cuerpo de peticion (en este caso se utilizo el primer metodo). Cada endpoint esta dotado de sus necesarias caracteristicas para operar con las entidades (teniendo en cuenta ciertas restricciones como evitar la ambiguedad, perdida de registros, etc).

La url base para cada endpoint es:
    
    http://localhost:3000/

seguido de los endpoints descritos a continuacion

### Esquema de los endpoints

#### Endpoints: Cliente (propietario)
---
>__GET: /client/__ (obtiene toda la lista de clientes)
>
>__GET: /client/:id__ (obtiene un cliente con la id __:id__)
>
>__POST: /client/__ (recibe como parametros sus propiedades sin la id y registra un cliente)
>
>__PUT: /client/:id__ (recibe como parametros el contacto y direccion y actualiza al cliente con la id __:id__) 
>
>__DELETE: /client/:id__ (borra a un cliente con la id __:id__)
>
> __http://localhost:3000/client/__

#### Endpoints: Paciente (animal)
---
>__GET: /patient/__ (obtiene toda la lista de pacientes)
>
>__GET: /patient/:id__ (obtiene un paciente con la id __:id__)
>
>__POST: /patient/__ (recibe como parametros sus propiedades (incluyendo la id de su propietario) sin su propia id y registra un paciente)
>
>__DELETE: /patient/:id__ (borra a un paciente con la id __:id__)
>
> __http://localhost:3000/patient/__

#### Endpoints: Cita
---
>__GET: /sched/__ (obtiene toda la lista de citas apartadas)
>
>__GET: /sched/:id__ (obtiene una cita con la id __:id__)
>
>__POST: /sched/__ (recibe como parametros sus propiedades (incluyendo la id del paciente) sin su propia id y agenda una cita)
>
>__PUT: /sched/:id__ (recibe como parametro la fecha de apartado y actualiza la cita con la id __:id__) 
>
> __http://localhost:3000/sched/__

#### Endpoints: Historia
---
>__GET: /history/__ (obtiene toda la lista de historias)
>
>__GET: /history/:id__ (obtiene una historia con la id __:id__)
>
>__POST: /history/__ (recibe como parametros sus propiedades (incluyendo la id del paciente) sin su propia id y registra una historia)
>
>
> __http://localhost:3000/history/__