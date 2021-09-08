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
    public class MovimientoController : ControllerBase
    {
        int[] t1 = new int[] { 1021, 450000, };
        int[] t2 = new int[] { 1022, 32000 };
        [HttpGet("ObtenerMov/{id}")]
        public int[] Get(int id)
        {
            return id switch
            {
                1 => t1,
                2 => t2,
                _ => throw new NotSupportedException("El id no es valido")
            };
        }
    }
}
