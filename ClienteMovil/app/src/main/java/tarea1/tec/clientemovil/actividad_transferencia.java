package tarea1.tec.clientemovil;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class actividad_transferencia extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_actividad_transferencia);

        Toolbar tool = findViewById (R.id.toolbar3);
        tool.setNavigationOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(final View view) {
                Intent volver = new Intent(actividad_transferencia.this, principal.class);
                startActivity (volver);
            }
        });
    }
}
