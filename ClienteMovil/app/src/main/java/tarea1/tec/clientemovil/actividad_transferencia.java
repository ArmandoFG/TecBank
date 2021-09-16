package tarea1.tec.clientemovil;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.content.SearchRecentSuggestionsProvider;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Calendar;
import java.util.Date;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import tarea1.tec.clientemovil.interfaces.UnMovimientoAPI;
import tarea1.tec.clientemovil.models.Movimiento;

/**
 * Clase de la pantalla de transferencias
 * @author Armando Fallas
 * @author Harold Espinoza
 *
 * */
public class actividad_transferencia extends AppCompatActivity {

    Button btnTrans;
    EditText TextMonto;
    EditText TextDetalle;
    int nTrans = 9;
    static String BASEURL = "http://192.168.1.3:8081/";

    /**
     * Metodo que inicializa la actividad, es decir, la interfaz
     * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_actividad_transferencia);

        btnTrans = findViewById(R.id.btnTrans);
        TextMonto = findViewById(R.id.editText4);
        TextDetalle = findViewById(R.id.editText2);

        btnTrans.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                send(Integer.parseInt(TextMonto.getText().toString()),TextDetalle.getText().toString());
            }
        });

        Toolbar tool = findViewById (R.id.toolbar3);
        tool.setNavigationOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(final View view) {
                Intent volver = new Intent(actividad_transferencia.this, principal.class);
                startActivity (volver);
            }
        });
    }
    /**
     * Metodo encargado de enviar un movimiento al API
     * @param detalle descripcion del movimiento realizado
     * @param monto cantidad del monto realizado
     * */
    public void send(int monto, String detalle)
    {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(BASEURL)
                .addConverterFactory(GsonConverterFactory.create()).build();
        UnMovimientoAPI UnmovimientoAPI=retrofit.create(UnMovimientoAPI.class);

        nTrans++;

        //Construccion del objeto movimiento

        Movimiento mov = new Movimiento();
        mov.setNumtran(nTrans);
        mov.setDescripcion(detalle);
        mov.setMonto(monto);
        Calendar c = Calendar.getInstance();
        String dia = Integer.toString(c.get(Calendar.DATE));
        String mes = Integer.toString(c.get(Calendar.MONTH));
        String annio = Integer.toString(c.get(Calendar.YEAR));
        mov.setFecha(dia+"/"+mes+"/"+annio);
        mov.setTipo("transferencia");

        Call<Movimiento> call=UnmovimientoAPI.env(mov);
        call.enqueue(new Callback<Movimiento>() {
            @Override
            public void onResponse(Call<Movimiento> call, Response<Movimiento> response) {
                try
                {
                    Toast.makeText(actividad_transferencia.this, "Transferencia realizada", Toast.LENGTH_SHORT).show();
                }catch (Exception ex){
                    Toast.makeText(actividad_transferencia.this, ex.getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<Movimiento> call, Throwable t) {
                Toast.makeText(actividad_transferencia.this, "Transferencia realizada", Toast.LENGTH_SHORT).show();
            }
        });



    };
}
