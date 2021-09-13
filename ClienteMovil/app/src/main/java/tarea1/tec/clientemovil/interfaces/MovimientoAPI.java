package tarea1.tec.clientemovil.interfaces;

import tarea1.tec.clientemovil.models.Movimiento;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;


public interface MovimientoAPI  {
    @GET("api/movimiento/obtenermov/{id}")
    //@GET("posts/{id}")
    public Call<Movimiento> find(@Path("id") String id);
}
