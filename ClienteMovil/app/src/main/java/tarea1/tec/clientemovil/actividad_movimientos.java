package tarea1.tec.clientemovil;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import tarea1.tec.clientemovil.ui.login.LoginActivity;

public class actividad_movimientos extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_actividad_movimientos);


        Toolbar tool = findViewById (R.id.toolbar);
        tool.setNavigationOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(final View view) {
                Intent volver = new Intent(actividad_movimientos.this, principal.class);
                startActivity (volver);
            }
        });
    }
}
