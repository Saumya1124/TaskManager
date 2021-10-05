import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Projects } from './projects';
import { map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // for node.js 
  // urlPrefix: string = "http://localhost:9090";
  // for database.json
  urlPrefix: string = "";

  constructor(private httpClient: HttpClient)
  {
  }
 
  getAllProjects(): Observable<Projects[]>
  {
    return this.httpClient.get<Projects[]>(this.urlPrefix + " http://localhost:3000/projects",{ responseType: "json" })
    .pipe(
      map((data: Projects[]) =>
      {
        for (let i = 0; i < data.length; i++)
        {
          data[i].teamSize = data[i].teamSize * 100;
        }
        return data;
      
      }));
  }
   
  insertProject(newProject: Projects): Observable<Projects>
  {
    return this.httpClient.post<Projects>(this.urlPrefix + " http://localhost:3000/projects", newProject,{ responseType: "json" });
  }

  updateProject(existingProject: Projects): Observable<Projects>
  {
    return this.httpClient.put<Projects>(this.urlPrefix + " http://localhost:3000/projects/"+ existingProject.projectID, existingProject,{ responseType: "json" });
  }
  
  // For deletion from node.js file
  // deleteProject(ProjectID: number): Observable<string>
  // {
  //   return this.httpClient.delete<string>(this.urlPrefix + "https://localhost:3000/projects/api/projects?ProjectID=" + ProjectID);
  // }


  // for deletion from database.json file
  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + " http://localhost:3000/projects/" + ProjectID,);
  }
  
  SearchProjects(searchBy: string, searchText: string): Observable<Projects[]>
  {
    return this.httpClient.get<Projects[]>(
      this.urlPrefix + '/api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }




}
