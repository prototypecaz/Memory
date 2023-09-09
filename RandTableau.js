function Rand_Tableau( tab_){
    var i;
    var Num;
    var Nbr = tab_[level].length;
     Tab = new Array();
    //-- Copie le contenu
    Tab = Tab.concat(tab_[level]);
    //-- Lance la boucle
    while( Nbr> 0){
      //-- Recup nombre aleatoire
      Num = Math.floor(Math.random() * Nbr);
      //-- 1 de moins a traiter
      Nbr--;
      //-- Stock l'element tire
      szTmp = Tab[Num];
      //-- Decalage les valeur du tableau
      for( i= Num; i < Nbr; i++)
        Tab[i] = Tab[i+1]
      //-- Stock l'element tire en fin
      Tab[ Nbr] = szTmp;
    }
    //-- On peut remettre dans l'ordre du tirage
    Tab.reverse();
    //-- Retourne resultat
    return( Tab);
  }
  
  
