using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Administracion.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {

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

        [HttpGet("ObtenerRoles")]
        public IEnumerable<string> GetRoles()
        {
            return new string[] { "admin"," dependiente"};
        }

        [HttpPost]
        public void PostRol([FromBody] string value) 
        {   
        } 

    }
}
