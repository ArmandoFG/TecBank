package tarea1.tec.clientemovil.interfaces;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import tarea1.tec.clientemovil.models.Movimiento;

public interface MovimientoAPI  {
    @GET("api/movimiento/obtenermov/{id}")
    public Call<Movimiento> find(@Path("id") String id);
}
