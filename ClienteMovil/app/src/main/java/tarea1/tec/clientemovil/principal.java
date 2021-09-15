package tarea1.tec.clientemovil;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;


import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import tarea1.tec.clientemovil.ui.login.LoginActivity;


/**
 * Clase para la pantalla principal de la aplicacion
 * @author Armando Fallas
 * */
public class principal extends AppCompatActivity {

    /**
     * Metodo que inicializa la pantalla principal
     * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_principal);
    }

    /**
     * Metodo para salir de la ventana pricipal de la aplicacion
     * */
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
    /**
     * Metodo que cambia la pantalla principal a la pantalla de movimientos
     * */
    public void Ini_Movimiento(View view){
        Intent Registro = new Intent(this, actividad_movimientos.class);
        startActivity (Registro);
    }
    /**
     * Metodo que cambia la pantalla principal a la pantalla de transferencias
     * */
    public void Ini_Transferencia(View view){
        Intent Registro = new Intent(this, actividad_transferencia.class);
        startActivity (Registro);
    }
}
