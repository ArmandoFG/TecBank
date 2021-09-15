using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


/**
 * Controlador para los roles
 * @author Harold Espinoza
 */
namespace Administracion.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {

        /**
         * Metodo de tipo Get que obtiene un rol con un id especifico
         * Solo obtiene los predefinidos en el metodo, no se lee ningun archivo o base de datos
         * @param id Id del rol que se desea obtener
         */
        [HttpGet("ObtenerRol/{id}")]
        public string Get(int id) 
        {
            return id switch
            {
                1 => "admin",
                2 => "dependiente",
                _ => throw new NotSupportedException("El id no es valido")
            };
        }

        /**
         * Metodo de tipo Get que se encarga de obtener los roles predefinidos 
         * @return roles roles asignados
         */
        [HttpGet("ObtenerRoles")]
        public IEnumerable<string> GetRoles()
        {
            return new string[] { "admin"," dependiente"};
        }

        /**
         * Metodo de tipo post para incluir un rol 
         * Se encuentra en proceso de implementacion
         */
        [HttpPost]
        public void PostRol([FromBody] string value) 
        {   
        } 

    }
}
