package tarea1.tec.clientemovil;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;


import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import tarea1.tec.clientemovil.ui.login.LoginActivity;

public class principal extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_principal);
    }

    public void Salir(View view){


        final AlertDialog.Builder alert = new AlertDialog.Builder(principal.this);
        alert.setMessage ("¿Desea cerrar sesión?").setCancelable (false).setPositiveButton ("Si", new DialogInterface.OnClickListener () {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Intent salir = new Intent(principal.this, LoginActivity.class);
                startActivity (salir);

            }
        }).setNegativeButton ("No", new DialogInterface.OnClickListener () {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel ();
            }
        });
        AlertDialog SalirAlerta = alert.create ();
        SalirAlerta.setTitle ("Alerta");
        SalirAlerta.show ();
    }
    public void Ini_Movimiento(View view){
        Intent Registro = new Intent(this, actividad_movimientos.class);
        startActivity (Registro);
    }
    public void Ini_Transferencia(View view){
        Intent Registro = new Intent(this, actividad_transferencia.class);
        startActivity (Registro);
    }
}
