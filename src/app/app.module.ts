import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "environments/firebaseConfig";
import {HomeComponent} from './home/home.component';
import {LessonsService} from "./share/model/lessons.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {LessonListComponent} from './lesson-list/lesson-list.component'
import {RouterModule} from "@angular/router";
import {RouterConfig} from "./router.config";
import {CoursesComponent} from './courses/courses.component';
import {CoursesService} from "./share/model/courses.service";
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {NewLessonComponent} from './new-lesson/new-lesson.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TopMenuComponent} from './top-menu/top-menu.component';
import {LessonDetailComponent} from './lesson-detail/lesson-detail.component';
import {SafeUrlPipe} from './share/security/safe-url.pipe';
import {LessonFormComponent} from './lesson-form/lesson-form.component';
import {EditLessonComponent} from './edit-lesson/edit-lesson.component';
import {LessonResolver} from "./share/model/lesson.resolver";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthService} from "./share/security/auth.service";
import {AuthGuard} from "./share/security/auth.guard";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonListComponent,
    CoursesComponent,
    CourseDetailComponent,
    NewLessonComponent,
    TopMenuComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    LessonFormComponent,
    EditLessonComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [LessonsService, CoursesService, LessonResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
