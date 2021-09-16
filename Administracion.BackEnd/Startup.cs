using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Administracion.BackEnd
{
    /**
     * Clase inicializacion
     * Se realiza la configuracion inicial del API
     * @author Harold Espinoza 
     */
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options => {
                options.WithOrigins("http://localhost:4200");
                options.AllowAnyMethod();
                options.AllowAnyHeader();

            });
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/",async context =>
                {
                    await context.Response.WriteAsync("TecBank");
                });
                endpoints.MapControllers();
            });
        }
    }
}
