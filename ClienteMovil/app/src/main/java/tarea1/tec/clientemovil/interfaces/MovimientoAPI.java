package tarea1.tec.clientemovil.interfaces;

import java.util.List;

import tarea1.tec.clientemovil.models.Movimiento;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;


public interface MovimientoAPI {
    //@GET("api/movimiento/obtenermov/{id}")
    @GET("api/movimiento/obtenermov")
    //@GET("posts/{id}")
    public Call<List<Movimiento>> find();
}
