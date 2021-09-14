package tarea1.tec.clientemovil.interfaces;

import java.util.List;

import retrofit2.http.Body;
import retrofit2.http.POST;
import retrofit2.http.Path;
import tarea1.tec.clientemovil.models.Movimiento;

import retrofit2.Call;
import retrofit2.http.GET;

public interface UnMovimientoAPI {
    @GET("api/movimiento/obtenermov/{id}")
    public Call<Movimiento> find(@Path("id") String id);

    @POST("api/movimiento/addmov")
    public Call<Movimiento> env(@Body Movimiento Body);
}
