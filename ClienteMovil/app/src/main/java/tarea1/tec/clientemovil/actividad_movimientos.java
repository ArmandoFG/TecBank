package tarea1.tec.clientemovil;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import tarea1.tec.clientemovil.interfaces.MovimientoAPI;
import tarea1.tec.clientemovil.models.Movimiento;
import tarea1.tec.clientemovil.ui.login.LoginActivity;

public class actividad_movimientos extends AppCompatActivity {

    TextView textmov1;
    TextView textmov2;
    Button btnmovs;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_actividad_movimientos);
        textmov1=findViewById(R.id.textmov1);
        textmov2=findViewById(R.id.textmov2);
        btnmovs=findViewById(R.id.Bmovs);

        btnmovs.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                find("1");
            }
        });


        Toolbar tool = findViewById (R.id.toolbar);
        tool.setNavigationOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(final View view) {
                Intent volver = new Intent(actividad_movimientos.this, principal.class);
                startActivity (volver);
            }

        });

    }
    private void find(String id)
    {
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://192.168.1.5:8081/")
        //Retrofit retrofit = new Retrofit.Builder().baseUrl("https://jsonplaceholder.typicode.com/")
                .addConverterFactory(GsonConverterFactory.create()).build();

        MovimientoAPI movimientoAPI=retrofit.create(MovimientoAPI.class);
        Call<Movimiento> call=movimientoAPI.find(id);
        call.enqueue(new Callback<Movimiento>() {
            @Override
            public void onResponse(Call<Movimiento> call, Response<Movimiento> response) {
                try
                {
                    Toast.makeText(actividad_movimientos.this, "res"+response.body().getDescripcion(), Toast.LENGTH_SHORT).show();
                    if(response.isSuccessful()){
                        //Toast.makeText(actividad_movimientos.this, "conectado", Toast.LENGTH_SHORT).show();
                        Movimiento m=response.body();
                        textmov1.setText("1     numero Transaccion: "+m.getNumtran());
                        textmov2.setText("1     monto: "+m.getMonto());
                    }

                }catch (Exception ex){
                    Toast.makeText(actividad_movimientos.this, ex.getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<Movimiento> call, Throwable t) {
                Toast.makeText(actividad_movimientos.this, "Error de conexion", Toast.LENGTH_SHORT).show();
            }
        });
    }

}
